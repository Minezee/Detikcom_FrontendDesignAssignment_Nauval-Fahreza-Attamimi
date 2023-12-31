import "./DirectBtn.css"

const DirectBtn = ({ text, url, customStyle }) => {
    const style = {
        ...customStyle,
    };

    return (
        <a href={url}>
            <button style={style} className="direct-btn">{text}</button>
        </a>
    );
};

export default DirectBtn;