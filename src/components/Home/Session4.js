import React from 'react';

export default function Session4() {
	return (
		<div className="flex flex-row items-center gap-10 px-20 py-10 mx-auto bg-lime-100 h-[646px]">
			<div className="flex flex-1">
				<img
					src="/images/s4p1.jpg"
					className="aspect-[648/594] w-full h-full rounded-lg"
					alt=""
				/>
			</div>

            <div className="flex flex-col flex-1 items-center">
				<h1 className="text-[60px] font-bold leading-[70px] mb-4 text-center text-lime-600">
                Xem, làm, thử, thực hiện
				</h1>
				<p className="text-center text-[30px] text-lime-500">
                Điều tuyệt nhất trên Artworld là khám phá những nội dung 
                và ý tưởng mới từ mọi người khắp thế giới.
				</p>
				<div>
					<button className="
					flex flex-row gap-6 mt-9
					py-2 px-6 rounded-md text-white font-medium
					bg-lime-700 hover:bg-lime-500">
						Khám phá
					</button>
				</div>
			</div>
		</div>
	);
}