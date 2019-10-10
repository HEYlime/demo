/**
 * @name
 * @author MingShined
 */
import React, { Fragment, useState, useEffect, Children } from 'react';
import router from 'umi/router';
import { Table, Pagination, Tag, Modal, Button } from 'antd';

import LineWrap from './components/line-wrap/line-wrap';
import SearchRow from './components/search-row/search-row';
import EditModal from './components/modal/modal'

import Styles from './index.less';
import axios from 'axios';
interface Props { };

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
		axios.get(
			'http://192.168.1.102:8000/api/table/list'
		).then((response) => {
			if (response.status == 200) {
				let list = response.data.list;
				// setData(
				// 	(preData: Columns[]) => {
				// 		return [...preData, ...list]
				// 	}
				// )
				setData([...list])
			}
		}).catch((error) => {
			console.log(error)
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
	const handleOk = function () {
		setVisible(false);
	}
	const handleCancel = function () {
		setVisible(false);
	}
	return (
		<Fragment>
			<EditModal visible={visible} handleCancel={handleCancel} handleOk={handleOk}></EditModal>
			<SearchRow></SearchRow>
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
export default TableList;
