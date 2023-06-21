import WebIMG from '../../assets/Web.png';
const Web = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10vh',
                height: '80vh',
            }}
        >
            <h1>Stakeholders</h1>
            <img
                src={WebIMG}
                alt="Um pouco de nossos valores"
                style={{ borderRadius: '1rem' }}
            />
        </div>
    );
};

export default Web;
