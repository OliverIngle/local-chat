import axios from "axios";

async function send() {

    let res = await axios.post('http://localhost:8080/receive', {
        message: 'hello world'
    });

    return res.data

}

/*
async function exec() {
    let message = await send()
    console.log(message)
}

exec()
*/


test('POST a message to /recieve', async () => {
    expect(await send()).toBe("Message received")
});
