import connection from "../config/connectDB";

const trxwinog = {
    trxPage1: async (req, res) => {
        try {
            // Fetch data from trx table using the shared connection
            const [trxgetData] = await connection.execute('SELECT * FROM trx WHERE type = 1 ORDER BY id DESC LIMIT 5');

            // Render the trx.ejs view with the fetched data
            console.log("result data as....", trxdata)
            res.render('bet/trx', { trxdata: trxgetData });
        } catch (error) {
            console.error('Error fetching trx data:', error);
            res.status(500).send('Error fetching trx data');
        }
    },
};

export default trxwinog;
