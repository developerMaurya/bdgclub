import connection from "../config/connectDB";
import winGoController from "./winGoController";
import k5Controller from "./k5Controller";
import k3Controller from "./k3Controller";
import cron from 'node-cron';
const axios = require('axios');
// const cron = require('node-cron');
// const mysql = require('mysql');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const cronJobGame1p = (io) => {
    cron.schedule('*/1 * * * *', async () => {
        await winGoController.addWinGo(1);
        await winGoController.handlingWinGo1P(1);
        const [winGo1] = await connection.execute('SELECT * FROM `wingo` WHERE `game` = "wingo" ORDER BY `id` DESC LIMIT 2 ', []);
        const data = winGo1; // Cầu mới chưa có kết quả
        io.emit('data-server', { data: data });

        await k5Controller.add5D(1);
        await k5Controller.handling5D(1);
        const [k5D] = await connection.execute('SELECT * FROM 5d WHERE `game` = 1 ORDER BY `id` DESC LIMIT 2 ', []);
        const data2 = k5D; // Cầu mới chưa có kết quả
        io.emit('data-server-5d', { data: data2, 'game': '1' });

        await k3Controller.addK3(1);
        await k3Controller.handlingK3(1);
        const [k3] = await connection.execute('SELECT * FROM k3 WHERE `game` = 1 ORDER BY `id` DESC LIMIT 2 ', []);
        const data3 = k3; // Cầu mới chưa có kết quả
        io.emit('data-server-k3', { data: data3, 'game': '1' });
    });
    cron.schedule('*/3 * * * *', async () => {
        await winGoController.addWinGo(3);
        await winGoController.handlingWinGo1P(3);
        const [winGo1] = await connection.execute('SELECT * FROM `wingo` WHERE `game` = "wingo3" ORDER BY `id` DESC LIMIT 2 ', []);
        const data = winGo1; // Cầu mới chưa có kết quả
        io.emit('data-server', { data: data });

        await k5Controller.add5D(3);
        await k5Controller.handling5D(3);
        const [k5D] = await connection.execute('SELECT * FROM 5d WHERE `game` = 3 ORDER BY `id` DESC LIMIT 2 ', []);
        const data2 = k5D; // Cầu mới chưa có kết quả
        io.emit('data-server-5d', { data: data2, 'game': '3' });

        await k3Controller.addK3(3);
        await k3Controller.handlingK3(3);
        const [k3] = await connection.execute('SELECT * FROM k3 WHERE `game` = 3 ORDER BY `id` DESC LIMIT 2 ', []);
        const data3 = k3; // Cầu mới chưa có kết quả
        io.emit('data-server-k3', { data: data3, 'game': '3' });
    });
    const fetchLatestBlock = async (type, value) => {
        // console.log("Entering fetchLatestBlock function...");
        // console.log("value is....", value)
        try {
            const fetchDataQuery = `SELECT block+${value} as block FROM trx WHERE type=${type} ORDER BY block DESC LIMIT 1`;
            // Execute query using await
            const [rows, fields] = await connection.execute(fetchDataQuery);
            if (rows.length > 0) {
                const latestBlock = rows[0].block;
                // console.log("Latest block fetched:", latestBlock);
                return latestBlock;
            } else {
                // console.log("No blocks found in trx table.");
                return null;
            }
        } catch (error) {
            console.error('Error fetching latest block:', error);
            throw error;
        }
    };
    fetchLatestBlock()
        .then(latestBlock => {
            // console.log("Latest block:", latestBlock);
        })
        .catch(error => {
            console.error("Error:", error);
        });

// Function to generate a unique ID with 17 characters
function generateUniqueID() {
    // Get the current time in Asia/Kolkata time zone
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const date = new Date(now);
    // console.log("date is ...",date)

    // Get the full year
    const year = date.getFullYear().toString();

    // Get the month (zero padded)
    const month = ('0' + (date.getMonth() + 1)).slice(-2);

    // Get the date (zero padded)
    const day = ('0' + date.getDate()).slice(-2);

    // Get the hours, minutes, and seconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Calculate the total minutes since midnight
    const totalMinutes = (hours * 60) + minutes+1;
    console.log("total minute is ....",totalMinutes)

    // Convert total minutes and seconds to a zero-padded string
    const timePeriod = ('00000' + totalMinutes).slice(-5);

    // Concatenate parts to form the unique ID
    const uniqueID = `${year}${month}${day}${timePeriod}`;

    return uniqueID;
}
const id = generateUniqueID();
console.log("Generated ID:", id);

    cron.schedule('*/1 * * * *', async () => {
        try {
            await winGoController.trxhandlingWinGo1P(1);
            // const [trxgetperiod] = await connection.execute('SELECT * FROM trx WHERE type = 1 ORDER BY id DESC LIMIT 1', []);
            // // console.log("trxgetperiod...",trxgetperiod[0].period);
            // const trxPeriodData=trxgetperiod[0].period +1;
            // // console.log("trx period data with + 1 value ....",trxPeriodData)
            // io.emit('data-server-trx-get-period', { data: trxPeriodData });
            await sleep(56000);
            const latestBlock = await fetchLatestBlock(1, 20);
          
 const response = await axios.get(`https://apilist.tronscanapi.com/api/block?sort=-balance&start=0&limit=20&producer=&number=&start_timestamp=&end_timestamp=`, {
});
// const data = response.data.data[1];
// const data = response.data.data[0];
// const block = data.number;
// const hash = data.hash;
const data = response.data.data;
const currentBlockNumber = data[0].number;
console.log("curent blocknumber....1.",currentBlockNumber)
        const targetBlockIndex = 1; // 3 seconds back (assuming each block represents ~1 second)

        const targetBlockData = data[targetBlockIndex];
        const block = targetBlockData.number;
        const hash = targetBlockData.hash;
function findLastIntegerDigit(hash) {
    for (let i = hash.length - 1; i >= 0; i--) {
        if (!isNaN(hash[i]) && hash[i] !== ' ') {
            return hash[i];
        }
    }
    return null;
}
const  result= findLastIntegerDigit(hash);
 const currentTime = new Date();
 const adjustedTime = new Date(currentTime.getTime() - 3000);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata'
};
const time = new Intl.DateTimeFormat('en-GB', options).format(adjustedTime).replace(',', '');
const formattedTime = time.replace(/(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1 $4:$5:$6');
            const bigsmall = result <= 4 ? 'small' : 'big';
            const status = 0;
            const singleType = 1;
            const uniqueID = generateUniqueID();
            const query = 'INSERT INTO trx (period, block, hash, result, bigsmall, time, status,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [uniqueID, block, hash, result, bigsmall, formattedTime, status, singleType]; // Assuming period can be null or auto-increment
            connection.query(query, values, (err, results) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return;
                }
                console.log('Data inserted:', results.insertId);
            });
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    });
    cron.schedule('*/3 * * * *', async () => {
        console.log("enter in log 3....")
        try {
            await winGoController.trxhandlingWinGo1P(3);
            
            // await sleep(56000);
            const latestBlock = await fetchLatestBlock(1, 20);
          
 const response = await axios.get(`https://apilist.tronscanapi.com/api/block?sort=-balance&start=0&limit=20&producer=&number=&start_timestamp=&end_timestamp=`, {
});
const data = response.data.data;
// const secondLatestBlockData = data[1]; // Index 1 for the second latest block
//         const block = secondLatestBlockData.number;
//         const hash = secondLatestBlockData.hash;
// // const block = data.number;
// // const hash = data.hash;
const currentBlockNumber = data[0].number;
console.log("curent blocknumber.....",currentBlockNumber)
        const targetBlockIndex = 2; // 3 seconds back (assuming each block represents ~1 second)

        const targetBlockData = data[targetBlockIndex];
        const block = targetBlockData.number;
        // const block = currentBlockNumber;
        const hash = targetBlockData.hash;

        console.log("Target block data:", block, hash);
console.log("block data as from 3 ....",block)
function findLastIntegerDigit(hash) {
    for (let i = hash.length - 1; i >= 0; i--) {
        if (!isNaN(hash[i]) && hash[i] !== ' ') {
            return hash[i];
        }
    }
    return null;
}
const  result= findLastIntegerDigit(hash);
 const currentTime = new Date();
 const adjustedTime = new Date(currentTime.getTime() - 3000);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata'
};

// Get the local time in the desired format
const time = new Intl.DateTimeFormat('en-GB', options).format(adjustedTime).replace(',', '');

// Format the time string to match "YYYY-MM-DD HH:MM:SS"
const formattedTime = time.replace(/(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1 $4:$5:$6');
            // console.log("time is ....",formattedTime)
            const bigsmall = result <= 4 ? 'small' : 'big';
            const status = 0;
            const singleType = 2;
            // SQL query to insert data
            const uniqueID = generateUniqueID();
            // console.log("uniqueId .....",uniqueID)
            const query = 'INSERT INTO trx (period, block, hash, result, bigsmall, time, status,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [uniqueID, block, hash, result, bigsmall, formattedTime, status, singleType]; // Assuming period can be null or auto-increment
            // Execute the query and handle potential errors
            connection.query(query, values, (err, results) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return;
                }
                // console.log('Data inserted:', results.insertId);
            });
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    });
    cron.schedule('*/5 * * * *', async () => {
        console.log("enter in log 5....")
        try {
            await winGoController.trxhandlingWinGo1P(5);
            // const [trxgetperiods] = await connection.execute('SELECT * FROM trx WHERE type = 3 ORDER BY id DESC LIMIT 1', []);
            // const trxPeriodData=trxgetperiods[0].period +1;
            // io.emit('data-server-trxFiveMinute-get-period', { data: trxPeriodData });
            const latestBlock = await fetchLatestBlock(1, 20);
          
 const response = await axios.get(`https://apilist.tronscanapi.com/api/block?sort=-balance&start=0&limit=20&producer=&number=&start_timestamp=&end_timestamp=`, {
});
// const data = response.data.data[1];
// const block = data.number;
// const hash = data.hash;
const data = response.data.data;
// const secondLatestBlockData = data[1]; // Index 1 for the second latest block
//         const block = secondLatestBlockData.number;
//         const hash = secondLatestBlockData.hash;
// // const block = data.number;
// // const hash = data.hash;
const currentBlockNumber = data[0].number;
        const targetBlockIndex = 2; // 3 seconds back (assuming each block represents ~1 second)

        const targetBlockData = data[targetBlockIndex];
        const block = targetBlockData.number;
        const hash = targetBlockData.hash;
function findLastIntegerDigit(hash) {
    for (let i = hash.length - 1; i >= 0; i--) {
        if (!isNaN(hash[i]) && hash[i] !== ' ') {
            return hash[i];
        }
    }
    return null;
}
const  result= findLastIntegerDigit(hash);
 const currentTime = new Date();
 const adjustedTime = new Date(currentTime.getTime() - 3000);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata'
};
const time = new Intl.DateTimeFormat('en-GB', options).format(adjustedTime).replace(',', '');
const formattedTime = time.replace(/(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1 $4:$5:$6');
            console.log("time is ..5..",formattedTime)
            const bigsmall = result <= 4 ? 'small' : 'big';
            const status = 0;
            const singleType = 3;
            const uniqueID = generateUniqueID();
            const query = 'INSERT INTO trx (period, block, hash, result, bigsmall, time, status,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [uniqueID, block, hash, result, bigsmall, formattedTime, status, singleType]; // Assuming period can be null or auto-increment
            // Execute the query and handle potential errors
            connection.query(query, values, (err, results) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return;
                }
                console.log('Data inserted:', results.insertId);
            });
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    });
    cron.schedule('*/10 * * * *', async () => {
        try {
            console.log("enter crone 10...")
            await winGoController.trxhandlingWinGo1P(10);
            // await sleep(56000);
            const latestBlock = await fetchLatestBlock(1, 20);
          
 const response = await axios.get(`https://apilist.tronscanapi.com/api/block?sort=-balance&start=0&limit=20&producer=&number=&start_timestamp=&end_timestamp=`, {
});
// const data = response.data.data[1];
// const block = data.number;
// const hash = data.hash;
const data = response.data.data;
const currentBlockNumber = data[0].number;
        const targetBlockIndex = 2; // 3 seconds back (assuming each block represents ~1 second)

        const targetBlockData = data[targetBlockIndex];
        const block = targetBlockData.number;
        const hash = targetBlockData.hash;
function findLastIntegerDigit(hash) {
    for (let i = hash.length - 1; i >= 0; i--) {
        if (!isNaN(hash[i]) && hash[i] !== ' ') {
            return hash[i];
        }
    }
    return null;
}
const  result= findLastIntegerDigit(hash);
 const currentTime = new Date();
 const adjustedTime = new Date(currentTime.getTime() - 3000);
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata'
};
const time = new Intl.DateTimeFormat('en-GB', options).format(adjustedTime).replace(',', '');
const formattedTime = time.replace(/(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1 $4:$5:$6');
            const bigsmall = result <= 4 ? 'small' : 'big';
            const status = 0;
            const singleType = 4;
            const uniqueID = generateUniqueID();
            const query = 'INSERT INTO trx (period, block, hash, result, bigsmall, time, status,type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [uniqueID, block, hash, result, bigsmall, formattedTime, status, singleType]; // Assuming period can be null or auto-increment
            connection.query(query, values, (err, results) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    return;
                }
                console.log('Data inserted:', results.insertId);
            });
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    });
    // data display 
    cron.schedule('*/1 * * * * *', async () => {
        const [singletrxgetperiod] = await connection.execute('SELECT * FROM trx WHERE type = 1 ORDER BY id DESC LIMIT 1', []);
            // console.log("trxgetperiod...",trxgetperiod[0].period);
            const singletrxPeriodData=singletrxgetperiod[0].period +1;
            // console.log("trx period data with + 1 value ....",trxPeriodData)
            io.emit('data-server-trx-get-period', { data: singletrxPeriodData });
        const [singletrxgetData] = await connection.execute('SELECT * FROM trx WHERE type = 1 ORDER BY id DESC LIMIT 10', []);
        const singletrxdata = singletrxgetData.map(items => {
            // Update hash to show only the last 6 characters
            items.hash = items.hash.slice(-4);
          
            // Update time to show only the time part (HH:mm:ss)
            items.time = items.time.split(' ')[1];
          
            // Format period field as per your requirement
            const formattedPeriod = `202**${items.period.toString().slice(-4)}`;
            items.period = formattedPeriod;
          
            // Return the modified item
            return items;
          });
        // console.log("trxdata...", trxdata)
        io.emit('data-server-trx', { data: singletrxdata });
        // >>>>>>>>>>>>>>>>>>>> in every 3 secound display as 3 minute data >>>>>>>
        const [threetrxgetperiod] = await connection.execute('SELECT * FROM trx WHERE type = 2 ORDER BY id DESC LIMIT 1', []);
            const threetrxPeriodData=threetrxgetperiod[0].period +1;
            io.emit('data-server-trxThreeMinute-get-period', { data: threetrxPeriodData });
        const [trxgetData] = await connection.execute('SELECT * FROM trx WHERE type = 2 ORDER BY id DESC LIMIT 10', []);
            // console.log("trxgetDate from 3....",trxgetData)
            const trxdata = trxgetData.map(item => {
                // Update hash to show only the last 6 characters
                item.hash = item.hash.slice(-4);
              
                // Update time to show only the time part (HH:mm:ss)
                item.time = item.time.split(' ')[1];
              
                // Format period field as per your requirement
                const formattedPeriods = `202**${item.period.toString().slice(-4)}`;
                item.period = formattedPeriods;
              
                // Return the modified item
                return item;
              });
            io.emit('data-server-trxThreeMinute', { data: trxdata });
            // <<<<<<<<<<<<<<<<<<<<<<<<< 5 minute >>>>>>>>>>>>>>>>>>>>>
            const [fivetrxgetperiods] = await connection.execute('SELECT * FROM trx WHERE type = 3 ORDER BY id DESC LIMIT 1', []);
            const fivetrxPeriodData=fivetrxgetperiods[0].period +1;
            io.emit('data-server-trxFiveMinute-get-period', { data: fivetrxPeriodData });
            const [fivetrxgetData] = await connection.execute('SELECT * FROM trx WHERE type = 3 ORDER BY id DESC LIMIT 10', []);
        const fivetrxdata = fivetrxgetData.map(itemfive => {
            // Update hash to show only the last 6 characters
            itemfive.hash = itemfive.hash.slice(-4);
          
            // Update time to show only the time part (HH:mm:ss)
            itemfive.time = itemfive.time.split(' ')[1];
          
            // Format period field as per your requirement
            const formattedPeriodfive = `202**${itemfive.period.toString().slice(-4)}`;
            itemfive.period = formattedPeriodfive;
          
            // Return the modified item
            return itemfive;
          });
        // console.log("fivetrxdata   55...", fivetrxdata)
        io.emit('data-server-trxFiveMinute', { data: fivetrxdata });

        const [tentrxgetperiodten] = await connection.execute('SELECT * FROM trx WHERE type = 4 ORDER BY id DESC LIMIT 1', []);
            // console.log("trxgetperiod...",trxgetperiod[0].period);
            const tentrxPeriodDataten=tentrxgetperiodten[0].period +1;
            // console.log("trx period data with + 1 value ....",trxPeriodData)
            io.emit('data-server-trxten-get-period', { data: tentrxPeriodDataten });
        const [rtentrxgetData] = await connection.execute('SELECT * FROM trx WHERE type = 4 ORDER BY id DESC LIMIT 10', []);
        // console.log("rtentrxgetData...........",rtentrxgetData)
        const tentrxdata = rtentrxgetData.map(itemten => {
            // Update hash to show only the last 6 characters
            itemten.hash = itemten.hash.slice(-4);
          
            // Update time to show only the time part (HH:mm:ss)
            itemten.time = itemten.time.split(' ')[1];
          
            // Format period field as per your requirement
            const formattedPeriodten = `202**${itemten.period.toString().slice(-4)}`;
            itemten.period = formattedPeriodten;
          
            // Return the modified item
            return itemten;
          });
        // console.log("trxdata...", trxdata)
        io.emit('data-server-trxten', { data: tentrxdata });

    })
    // <<<<<<<<<<<<<<<<< admin display <<<<<<<<<<<<<<<<<<<<<
    cron.schedule('*/1 * * * *', async () => {
        try {
            
            console.log("enter con job for q....")

            const getLatestBlock = async () => {
                try {
                    const [rows] = await connection.query('SELECT * FROM trx WHERE type=1 ORDER BY id DESC LIMIT 1');
                    if (rows.length > 0) {
                        return rows[0];
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Error fetching latest block:', error);
                    return null;
                }
            };
    
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
            const performIncrementalOperation = async () => {
                const latestBlock = await getLatestBlock();
                if (!latestBlock) {
                    console.error('No block data found');
                    return;
                }
            
                let currentBlock = latestBlock.block;
                let currentTimeString = latestBlock.time;
                let [datePart, timePart] = currentTimeString.split(' '); // Split date and time parts
                let [day, month, year] = datePart.split('/').map(Number); // Split and parse date parts
                let [hours, minutes, seconds] = timePart.split(':').map(Number); // Split and parse time parts
                const secondIncrement = Math.floor(seconds / 3); // Increment value based on the given logic
            
                let iterationCount = 0;
                const totalIterations = 20;
                const resultsHistory = []; // Array to store the last 5 results
            
                const intervalId = setInterval(async () => {
                    iterationCount++;
                    currentBlock += 1;
                    seconds += secondIncrement;
                    if (seconds >= 60) {
                        minutes += Math.floor(seconds / 60);
                        seconds = seconds % 60;
                    }
                    if (minutes >= 60) {
                        hours += Math.floor(minutes / 60);
                        minutes = minutes % 60;
                    }
                    if (hours >= 24) {
                        hours = hours % 24;
                    }
            
                    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Format time as HH:mm:ss
            
                    try {
                        const response = await axios.get('https://apilist.tronscanapi.com/api/block?sort=-balance&start=0&limit=20&producer=&number=&start_timestamp=&end_timestamp=', {
                            // params: {
                            //     number: currentBlock
                            // }
                        });
                        const data = response.data.data[0];
                        const block = data.number;
                        // console.log("block details ....",block)
                        const hash = data.hash;
                        // console.log("hash send data ...",hash)
                        function findLastIntegerDigit(hash) {
                            for (let i = hash.length - 1; i >= 0; i--) {
                                if (!isNaN(hash[i]) && hash[i] !== ' ') {
                                    return hash[i];
                                }
                            }
                            return null;
                        }
                        const  results= findLastIntegerDigit(hash);
                        // const results = data.result;
                        const bigsmall = results <= 4 ? 'small' : 'big';
                        let blockData = {
                            serial: iterationCount,
                            block: block,
                            time: formattedTime,
                            result: results,
                            bigsmall: bigsmall
                        };
            // console.log("block data as ....",blockData)
                        // Add the new result to the history array
                        resultsHistory.push(blockData);
            
                        // Keep only the last 5 results
                        if (resultsHistory.length > 10) {
                            resultsHistory.shift();
                        }
            
                        io.emit('data-server-trx-three-secound', { data: resultsHistory }); // Emit the history of the last 5 results
                        // console.log('Block:', blockData);
                    } catch (error) {
                        console.error('Error fetching block result:', error);
                    }
            
                    if (iterationCount >= totalIterations) {
                        clearInterval(intervalId); // Clear the interval after 20 iterations
                        console.log('Completed 20 intervals, waiting for 60 seconds before fetching new data...');
                        await delay(2000); // Wait for 60 seconds
                        // performIncrementalOperation(); // Recursively call to restart the process
                    }
                }, 3000); // Run every 2 seconds
            };
            performIncrementalOperation();
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    })
    

    cron.schedule('*/5 * * * *', async () => {
        await winGoController.addWinGo(5);
        await winGoController.handlingWinGo1P(5);
        const [winGo1] = await connection.execute('SELECT * FROM `wingo` WHERE `game` = "wingo5" ORDER BY `id` DESC LIMIT 2 ', []);
        const data = winGo1; // Cầu mới chưa có kết quả
        io.emit('data-server', { data: data });

        await k5Controller.add5D(5);
        await k5Controller.handling5D(5);
        const [k5D] = await connection.execute('SELECT * FROM 5d WHERE `game` = 5 ORDER BY `id` DESC LIMIT 2 ', []);
        const data2 = k5D; // Cầu mới chưa có kết quả
        io.emit('data-server-5d', { data: data2, 'game': '5' });

        await k3Controller.addK3(5);
        await k3Controller.handlingK3(5);
        const [k3] = await connection.execute('SELECT * FROM k3 WHERE `game` = 5 ORDER BY `id` DESC LIMIT 2 ', []);
        const data3 = k3; // Cầu mới chưa có kết quả
        io.emit('data-server-k3', { data: data3, 'game': '5' });
    });
    cron.schedule('*/10 * * * *', async () => {
        await winGoController.addWinGo(10);
        await winGoController.handlingWinGo1P(10);
        const [winGo1] = await connection.execute('SELECT * FROM `wingo` WHERE `game` = "wingo10" ORDER BY `id` DESC LIMIT 2 ', []);
        const data = winGo1; // Cầu mới chưa có kết quả
        io.emit('data-server', { data: data });


        await k5Controller.add5D(10);
        await k5Controller.handling5D(10);
        const [k5D] = await connection.execute('SELECT * FROM 5d WHERE `game` = 10 ORDER BY `id` DESC LIMIT 2 ', []);
        const data2 = k5D; // Cầu mới chưa có kết quả
        io.emit('data-server-5d', { data: data2, 'game': '10' });

        await k3Controller.addK3(10);
        await k3Controller.handlingK3(10);
        const [k3] = await connection.execute('SELECT * FROM k3 WHERE `game` = 10 ORDER BY `id` DESC LIMIT 2 ', []);
        const data3 = k3; // Cầu mới chưa có kết quả
        io.emit('data-server-k3', { data: data3, 'game': '10' });
    });

    cron.schedule('* * 0 * * *', async () => {
        await connection.execute('UPDATE users SET roses_today = ?', [0]);
        await connection.execute('UPDATE point_list SET money = ?', [0]);
    });
}

module.exports = {
    cronJobGame1p
};