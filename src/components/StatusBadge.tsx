export const StatusBadge: React.FC<{ status: 'active' | 'inactive' }> = ({ status }) => {
    const statusClasses = {
        active: 'bg-gray-100 text-gray-600 border border-gray-200',
        inactive: 'bg-gray-100 text-gray-600 border border-gray-200'
    };

    return (
        <span
            className={`px-3 py-2 rounded-full text-xs font-medium ${statusClasses[status]} capitalize hover:bg-gray-200 transition-colors cursor-pointer font-semibold `}
            style={{ minWidth: '5.5rem', display: 'inline-block', textAlign: 'center' }}
        >
            {status}
        </span>
    );
};
