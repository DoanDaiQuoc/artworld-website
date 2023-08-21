import React from 'react';

export default function Session2() {
	return (
		<div className="flex flex-row items-center gap-10 px-20 py-10 mx-auto bg-cyan-100 h-[646px]">
			<div className="flex flex-1 ">
				<img
					src="/images/s2p2.jpg"
					className="aspect-[648/594] w-full h-full rounded-lg"
					alt=""
				/>
			</div>

            <div className="flex flex-col flex-1 items-center">
				<h1 className="text-[60px] font-bold leading-[70px] mb-4 text-center text-cyan-600">
                Tìm kiếm ý tưởng
				</h1>
				<p className="text-center text-[30px] text-cyan-500">
                Bạn muốn thử điều gì tiếp theo? Hãy nghĩ về ý tưởng bạn yêu 
                thích—như "buổi chiều đơn giản"—và xem bạn tìm thấy gì.
				</p>
				<div>
					<button className="
					flex flex-row gap-6 mt-9
					py-2 px-6 rounded-md text-white font-medium
					bg-cyan-700 hover:bg-cyan-500">
						Khám phá
					</button>
				</div>
			</div>
		</div>
	);
}