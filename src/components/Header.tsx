import { Bell, Search } from "lucide-react";
import Image from "next/image";

export const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                {/* Title */}
                <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-start">
                    <h1 className="text-base sm:text-lg font-semibold text-gray-900">
                        Test Task
                    </h1>
                </div>

                {/* Search + Notifications + Avatar */}
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
                    {/* Search */}
                    <div className="relative w-full max-w-xs sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-4 py-2 w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                        />
                    </div>

                    {/* Notification Icon */}
                    <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                        <Bell className="w-5 h-5" />
                    </button>

                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23f97316'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-family='Arial' font-size='12' font-weight='500'%3EA%3C/text%3E%3C/svg%3E"
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
