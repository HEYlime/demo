/**
 * @name
 * @author MingShined
 */
import React, { Fragment, useState, useEffect, Children } from 'react';
import router from 'umi/router';
import {
	Modal,
	Form,
	Input,
	InputNumber,
	Tooltip,
	Icon,
	Cascader,
	Select,
	Checkbox,
	Radio,
	Button,
	message,
	Table,
	Tag,
	Pagination,
	Skeleton
} from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";
const { Option } = Select;

import LineWrap from './components/line-wrap/line-wrap';
import SearchRow from './components/search-row/search-row';

import httpService from './../../utils/request';

import Styles from './index.less';
interface Props extends FormComponentProps { };

interface Columns {
	key: number,
	age: number,
	address: string,
	name: string,
	tags: Array<string>,
	random: string,
}

const TableList: React.FC<Props> = props => {

	const columns = [

		{
			title: 'COL1',
			dataIndex: 'address',
			render: (text: string) => {
				return (
					<LineWrap title={text} lineClampNum={2}></LineWrap>
				)
			}
		},
		{
			title: 'COL2',
			dataIndex: 'name',
			render: (text: string) => {
				return (
					<span >{text}</span>
				)
			}
		},
		{
			title: 'COL3',
			dataIndex: 'random',
			render: (text: string) => {
				return (
					<LineWrap title={text} lineClampNum={2}></LineWrap>
				)
			}
		},
		{
			title: 'Tags',
			dataIndex: 'tags',
			render: (tags: Array<string>) => (
				<span>
					{
						tags.map(tag => {
							let color = tag.length > 5 ? 'geekblue' : 'green';
							if (tag === 'loser') {
								color = 'volcano';
							}
							return (
								<Tag color={color} key={tag}>
									{tag.toUpperCase()}
								</Tag>
							)
						})
					}
				</span>
			)
		},
		{
			title: 'action',
			// fixed: 'right',
			dataIndex: 'key',
			render: (key: number, record: object, index: number) => {
				let ret: React.ReactNode;
				if (key % 2 == 0) {
					ret = <Fragment >
						<span className={Styles.operation} onClick={(e) => doSelect(record)}>select</span>
						<span className={Styles.operation} onClick={(e) => doEdit(record)}>edit</span>
						<span className={Styles.operation} onClick={(e) => evenClick(record)}>even</span>
					</Fragment>;
				} else {
					ret = <Fragment >
						<span className={Styles.operation} onClick={(e) => doSelect(record)}>select</span>
						<span className={Styles.operation} onClick={(e) => doEdit(record)}>edit</span>
						<span className={Styles.operation} onClick={(e) => oddClick(record)}>odd</span>
					</Fragment>;
				}
				return ret;
			}
		}
	];
	const evenClick = (record: any) => {
		// console.log(record)
		router.push('/update/update');
	}
	const oddClick = (record: any) => {
		console.log(record)
	}
	const doEdit = (record: any) => {
		showModal();
		console.log(record)
	}
	const doSelect = (record: any) => {
		console.log(record)
		router.push('/detail/detail');
	}

	const [data, setData] = useState<any>([]);
	const [pageNo, setPageNo] = useState(1);

	useEffect(() => {
		getData(1);
	}, [])



	const getData = function (page: number) {
		httpService.httpPost('/api/table/list', { test: 1 }).then((data: any) => {
			let list = data.data.list;
			setData([...list])
		})
	}
	const pageChange = (page: number) => {
		setPageNo(page);
		getData(page);
	}

	const [visible, setVisible] = useState(false);
	const showModal = function () {
		setVisible(true)
	}
	const handleOk = (e: any) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				setVisible(false);
			} else {
				message.error('Please complete the information!');
			}
		});
	}
	const handleCancel = function () {
		setVisible(false);
	}
	const handleReset = () => {
		props.form.resetFields();
	}

	const [loading, setLoading] = useState(false);
	const { getFieldDecorator } = props.form;

	const formItemLayout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 14 },
	};
	return (
		<Fragment>
			{/* 弹出层 */}
			<Modal
				visible={visible}
				title="Title"
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleReset}>
						RESET
				</Button>,
					<Button key="submit" type="primary" loading={loading} onClick={handleOk}>
						CONFIRM
				</Button>,
				]}
			>
				<div >
					<Form {...formItemLayout} layout="horizontal" onSubmit={handleOk}>
						<Form.Item label="Plain Text">
							<span>China</span>
						</Form.Item>

						<Form.Item label="Password" hasFeedback>
							{getFieldDecorator('password', {
								rules: [
									{
										required: true,
										max: 18,
										message: 'Please input your password!',
									}
								],
							})(<Input.Password />)}
						</Form.Item>
						<Form.Item label="Select" hasFeedback>
							{getFieldDecorator('select', {
								rules: [
									{
										required: true,
										message: 'Please select your country!'
									}
								],
							})(
								<Select placeholder="Please select a country">
									<Option value="china">China</Option>
									<Option value="usa">U.S.A</Option>
								</Select>,
							)}
						</Form.Item>
						<Form.Item label="InputNumber">
							{getFieldDecorator('input-number', {
								initialValue: 3
							})(<InputNumber min={1} max={10} />)}
							<span className="ant-form-text"> machines</span>
						</Form.Item>
						<Form.Item label="Radio.Button">
							{getFieldDecorator('radio')(
								<Radio.Group>
									<Radio value="a">item 1</Radio>
									<Radio value="b">item 2</Radio>
									<Radio value="c">item 3</Radio>
								</Radio.Group>,
							)}
						</Form.Item>
					</Form>
				</div>
			</Modal>
			{/* 搜索条件 */}
			<SearchRow></SearchRow>
			{/* 表格 */}
			<Table
				rowKey={record => record.key}
				className={Styles.antTableWrapper}
				columns={columns}
				dataSource={data}
				pagination={false}

			/>
			<Pagination
				className={Styles.antPagination}
				total={100}
				defaultCurrent={1}
				defaultPageSize={10}
				current={pageNo}
				onChange={pageChange}
				showSizeChanger
				showQuickJumper />
		</Fragment>

	);
};
export default Form.create<any>()(TableList);

