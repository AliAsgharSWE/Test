import { User } from "../containers/home/types";
import { StatusBadge } from "./StatusBadge";

export const Table: React.FC<{ users: User[] }> = ({ users }) => {
    return (
        <>
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Customer Overview</h3>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <div className="min-w-[600px]">

                        <table className="w-full text-sm text-left">
                            <thead className="">
                                <tr className="border-b border-gray-100 text-gray-600 font-medium">
                                    <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Name</th>
                                    <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Contact</th>
                                    <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Last Interaction</th>
                                    <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr
                                        key={user.name}
                                        className={`${index !== users.length - 1
                                            ? "border-b border-gray-50"
                                            : ""
                                            } hover:bg-gray-50 transition`}
                                    >
                                        <td className="px-4 sm:px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="px-4 sm:px-6 py-4 text-gray-600 hover:text-gray-700 cursor-pointer whitespace-nowrap">
                                            {user.contact}
                                        </td>
                                        <td className="px-4 sm:px-6 py-4 text-gray-600 whitespace-nowrap">
                                            {user.lastInteraction}
                                        </td>
                                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                            <StatusBadge status={user.status} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
