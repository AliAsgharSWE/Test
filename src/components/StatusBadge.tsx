export const StatusBadge: React.FC<{ status: 'active' | 'inactive' }> = ({ status }) => {
    const statusClasses = {
        // active: 'bg-green-100 text-green-700 border border-green-200',
        active: 'bg-gray-100 text-gray-600 border border-gray-200',
        inactive: 'bg-gray-100 text-gray-600 border border-gray-200'
    };

    return (
        <span className={`px-3 min-w-44 text-center py-2 rounded-full text-xs font-medium ${statusClasses[status]} capitalize`}>
            {status}
        </span>
    );
};

