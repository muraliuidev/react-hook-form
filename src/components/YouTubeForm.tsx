import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let renderCount = 0;

type FormValues = {
    username: string,
    email: string,
    channel: string
}

function YouTubeForm() {
const form = useForm<FormValues>()
const { register, control, handleSubmit } = form;


const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data)
}
// const { name, ref, onChange, onBlur} = register("username")
    renderCount++
    return(
        <div>
            <h1>YouTube Form({renderCount/2})</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">User Name</label>
                {/* <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
                <input type="text" id="username" {...register("username")} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register("channel")} />

                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
export default YouTubeForm