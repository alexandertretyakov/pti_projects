import style from '../../index.module.scss'

import Table from './Table';

const Main = () => {
    return (
        <div className={style.main}>
            <h3>Transactions</h3>
            <p className={style.tableDescription}>Transactions that change the state of the Starknet blockchain.</p>
            <Table />
        </div>
    )
};

export default Main;