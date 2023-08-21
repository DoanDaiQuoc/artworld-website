import React from 'react';

export default function Session3() {
	return (
		<div className="flex flex-row items-center gap-10 px-20 py-10 mx-auto bg-red-100 h-[646px]">
            <div className="flex flex-col flex-1 items-center">
				<h1 className="text-[60px] font-bold leading-[70px] mb-4 text-center text-red-600">
                Lưu ý tưởng bạn thích
				</h1>
				<p className="text-center text-[30px] text-red-500">
                Thu thập nội dung bạn yêu thích để bạn có thể quay lại xem sau.
				</p>
				<div>
					<button className="
					flex flex-row gap-6 mt-9
					py-2 px-6 rounded-md text-white font-medium
					bg-red-700 hover:bg-red-500">
						Khám phá
					</button>
				</div>
			</div>

            <div className="flex flex-1 ">
				<img
					src="/images/s1p3.jpg"
					className="aspect-[648/594] w-full h-full rounded-lg"
					alt=""
				/>
			</div>
		</div>
	);
}