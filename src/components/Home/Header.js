import React from 'react'

export default function Header() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between px-10 py-10">
                <div>
                    <img
                        src="/images/logo.png"
                        alt=""
                        width={170}
                        height={60}
                    />
                </div>
                <div className="flex flex-row items-center gap-20 font-medium text-[17px]">
					<a href="/" className="transform motion-safe:hover:scale-110">
						Giới thiệu
					</a>
					<a href="/" className="transform motion-safe:hover:scale-110">
						Doanh Nghiệp
					</a>
					<a href="/" className="transform motion-safe:hover:scale-110">
						Blog
					</a>
				</div>
                <div className="flex flex-row items-center gap-4">
						<p className="text-blue-400"></p>
						<button
							onClick={Header}
							className="py-3 px-3 rounded-md bg-red-500 hover:bg-red-700 text-white"
						>
							Đăng Nhập
						</button>
                        <button
							onClick={Header}
							className="py-3 px-3 rounded-md bg-slate-300 hover:bg-slate-500 text-white"
						>
							Đăng Ký
						</button>
					</div>
            </div>
        </div>
    )
}
