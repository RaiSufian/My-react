import { useState } from "react"

const Login = () => {

    const [data, setdata] = useState({
        name: '',
        email: '',
        phone: '',
        pass: '',
    })


    const GetDetail = (event) => {
        const { value, name } = event.target;
        setdata({ ...data, [name]: value });
    }

    const [upData, setUpData] = useState([])
    const getData = (e) => {
        e.preventDefault();

        const newData = { ...data, id: new Date().getTime().toString() }
        console.log(upData)
        setUpData([...upData, newData])
        console.log(upData)

        setdata({
            name: "",
            email: "",
            phone: "",
            pass: "",
        })
    }


    return (
        <>
            <form onSubmit={getData}>
                <input type="text"
                    placeholder="enter your name"
                    name="name"
                    value={data.name}
                    onChange={GetDetail} autoComplete="off" /><br />

                <input type="email"
                    placeholder="enter your email"
                    name="email"
                    value={data.email}
                    onChange={GetDetail} autoComplete="off" /><br />


                <input type="phone"
                    placeholder="enter your phone"
                    name="phone"
                    value={data.phone}
                    onChange={GetDetail} autoComplete="off" /><br />

                <input type="password"
                    placeholder="enter your password"
                    name="pass"
                    value={data.pass} 
                    onChange={GetDetail} autoComplete="off" /><br />

                <button type="submit">Submit</button>

                <div className="showData">
                    <h6>hello{upData.name}</h6>
                    <h6>{upData.email}</h6>
                    <h6>{upData.phone}</h6>
                    <h6>{upData.pass}</h6>
                </div>
            </form>
        </>
    )
}
export default Login;