import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FakeCard = () => {
    return (
        <div style={{ width: 230, 
        padding: 10, 
        borderRadius: 0, 
        background: '#fff', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            
            {/* صورة الطبق */}
            <Skeleton height={160} borderRadius={0} />

            {/* اسم الطبق */}
            <div style={{ marginTop: 3 }}>
                <Skeleton height={20} width="50%" />
            </div>

            {/* وصف الطبق */}
            <div style={{ marginTop: 5 }}>
                <Skeleton count={2} height={14} />
            </div>

            {/* السعر */}
            <div style={{ marginTop: 10 }}>
                <Skeleton height={20} width="30%" />
            </div>

        </div>
    )
}

export default FakeCard;