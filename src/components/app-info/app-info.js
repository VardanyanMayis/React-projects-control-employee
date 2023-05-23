import './app-info.css';

const AppInfo = (props) => {
    const {countOfEmployess, nameOfCompany, countOfEmployessWithPremum} = props;

    return (
        <div className="app__info">
            <h1>Учет сотрудников в компании <span>{nameOfCompany}</span></h1>
            <h2>Общее количество сотрудников: <span>{countOfEmployess}</span></h2>
            <h2>Премию получат <span>{countOfEmployessWithPremum}</span></h2>
        </div>
    )
}

export default AppInfo;
