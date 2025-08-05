import { User } from "../containers/home/types";
import { StatusBadge } from "./StatusBadge";

export const Table: React.FC<{ users: User[] }> = ({ users }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Customer Overview</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Contact</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Last Interaction</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.name} className={`${index !== users.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 hover:text-gray-700 cursor-pointer">{user.contact}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{user.lastInteraction}</td>
                                <td className="px-6 py-4">
                                    <StatusBadge status={user.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
