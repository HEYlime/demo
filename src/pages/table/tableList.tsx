/**
 * @name
 * @author MingShined
 */
import React, { Fragment, useState, useEffect } from 'react';
import { Table, Pagination, Tag } from 'antd';
import LineWrap from './components/line-wrap/line-wrap';
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
				ret = <span onClick={(e) => evenClick(record)}>even</span>;
			} else {
				ret = <span onClick={(e) => oddClick(record)}>odd</span>;
			}
			return ret;
		}
	}
];
const evenClick = (record: any) => {
	console.log(record)
}
const oddClick = (record: any) => {
	console.log(record)
}




const HookPage: React.FC<Props> = props => {
	const [data, setData] = useState([]);
	const [pageNo, setPageNo] = useState(1);

	useEffect(() => {
		getData(1);
	}, [])

	const getData = function (page: number) {
		axios.post(
			'http://192.168.1.110:8000/api/table/list'
		).then((response) => {
			if (response.status == 200) {
				let list = response.data.list;
				setData(
					(preData: Columns) => {
						return [...preData, ...list]
					}
				)
			}
		}).catch((error) => {
			console.log(error)
		})
	}
	const pageChange = (page: number) => {
		setPageNo(page);
		getData(page);
	}
	return (
		<Fragment>
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
export default HookPage;
