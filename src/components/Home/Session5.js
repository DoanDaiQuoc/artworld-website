import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/authContext';

export default function Session5() {
	// const navigate = useNavigate();
	// const { state, setState } = useContext(AuthContext);

	// const handleChange = (e) => {
	// 	setState({ ...state, [e.target.name]: e.target.value });
	// };

	// const handleSubmit = () => {
	// 	navigate('/home');
	// 	window.localStorage.setItem('email', state.email);
	// };

	return (
		<div className="max-w-full w-[1440px] min-h-screen p-6 grid grid-cols-2 items-center
		bg-gradient-to-r from-cyan-100 to-blue-500 ">
			<div className="flex flex-col items-center flex-1">
				<h1 className="text-[60px] font-bold leading-[70px] mb-4 text-center text-neutral-950">
                Đăng ký để nhận thêm ý tưởng
				</h1>
				<p className="text-center text-[30px] text-neutral-600">
                Đăng ký để lưu trữ và khám phá các ý tưởng của bạn.
				</p>
			</div>

			<div className="flex items-center justify-center rounded-lg bg-white py-10">
				<div className="w-[300px] flex flex-col gap-3">
                <p className="text-center text-[28px] text-neutral-800 font-bold">
                Chào mừng bạn đến với ArtWorld.
				</p>
                <p className="text-center text-[20px] text-neutral-500 ">
                Đăng ký để khám phá nhiều hơn.
				</p>
                <div>Email</div>
					<input
						placeholder="Email"
						type="email"
						name="email"
						// value={state.email}
						// onChange={handleChange}
						className="w-full h-[46px] px-4 rounded border border-[#D0D0D0]"
					/>
                    <div>Mật khẩu</div>
					<input
						placeholder="Tạo mật khẩu"
						type="password"
						name="password"
						// value={state.password}
						// onChange={handleChange}
						className="w-full h-[46px] px-4 rounded border border-[#D0D0D0]"
					/>
                    <div>Ngày sinh</div>
                    <input
						placeholder="Ngày sinh"
						type="date"
						name="date"
						// value={state.password}
						// onChange={handleChange}
						className="w-full h-[46px] px-4 rounded border border-[#D0D0D0]"
					/>
					<button
						className="w-full h-[46px] px-4 rounded bg-[#42A7C3] flex items-center justify-center text-white"
						// onClick={handleSubmit}
						// disabled={!state.email || !state.password}
					>
						Tiếp tục
					</button>
					<div>
					</div>
					<div className="flex flex-row items-center gap-3">
						<div className="h-[1px] flex flex-1 bg-[#D0D0D0]"></div>
						<p className="text-[#D0D0D0] text-sm">
							Hoặc đăng ký với
						</p>
						<div className="h-[1px] flex flex-1 bg-[#D0D0D0]"></div>
					</div>
					<button className="w-full h-[46px] px-4  border border-[#D0D0D0] rounded bg-white flex items-center justify-center text-[#505050] text-sm">
					    <div className="flex float-left">
							<img src="/images/ggicon.png"
							className="h-[17px] w-[16px] flex flex-col gap-10"/>
						</div>
						Google
					</button>
					<button className="w-full h-[46px] px-4  border border-[#D0D0D0] rounded bg-white flex items-center justify-center text-[#505050] text-sm">
					<div>
							<img src="/images/fbicon.png"
							className="h-[18px] w-[9px]"/>
						</div>
						Facebook
					</button>
				</div>
			</div>
		</div>
	);
}