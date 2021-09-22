import React, { Component } from 'react'
import './index.css'
import HangGhe from "./HangGhe"
import ThongTinDatGhe from "./ThongTinDatGhe"
import DanhSachGheData from "../../data/danhSachGhe.json"
export default class BookingMovie extends Component {

	renderLineChair = () => {
		return DanhSachGheData.map((hangGhe, index) => {
			return <div key={index} >
				<HangGhe hangGhe={hangGhe} soHangGhe={index} />
			</div>
		})
	}


	render() {
		return (
			<div style={{
				position: 'fixed', width: '100%', height: '100%',
				backgroundImage: 'url(./img/bgmovie.jpg)', backgroundSize: '100%'
			}}>
				<div style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: 'fixed', width: '100%', height: '100%' }}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-8 text-center">
								<h2 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
								<div className="mt-3 text-light" style={{ fontSize: '25px' }}>Màn hình</div>
								<div className="mt-1"
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center"
									}}>
									<div className="screen ml-5"></div>
									{this.renderLineChair()}

								</div>
							</div>
							<div className="col-4">
								<h2 className="text-center text-light mt-2">DANH SÁCH GHẾ BẠN CHỌN</h2>
								<ThongTinDatGhe />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
