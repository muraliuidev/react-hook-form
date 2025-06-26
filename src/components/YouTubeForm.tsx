import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let renderCount = 0;

type FormValues = {
    username: string,
    email: string,
    channel: string,
    social: {
        twitter: string,
        facebook: string
    },
    phoneNumbers: string[];
}

function YouTubeForm() {
const form = useForm<FormValues>({
    defaultValues: {
        username: "Batman",
        email: "batman@gmail.com",
        channel: "Batman-Series",
        social: {
            twitter: "",
            facebook: ""
        },
        phoneNumbers: ["", ""]
    }
})
const { register, control, handleSubmit, formState } = form;
const { errors } = formState;

const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data)
}
// const { name, ref, onChange, onBlur} = register("username")
    renderCount++
    return(
        <div>
            <h1>YouTube Form({renderCount/2})</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form__control">
                    <label htmlFor="username">User Name</label>
                    {/* <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
                    <input type="text" id="username" {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required"
                        }
                    })} />
                    <p className="error__msg">{errors.username?.message}</p>
                </div>

                <div className="form__control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email",{
                        pattern: {
                            value:/^\S+@\S+\.\S+$/,
                            message: 'Invalid Email'
                        },
                        validate: {
                            notAdmin: (fieldValue) => {
                                return(
                                    fieldValue !== "admin@gmail.com" || "Enter a diff email Address"
                                );
                            }
                        }
                    })} />
                    <p className="error__msg">{errors.email?.message}</p>
                </div>

                <div className="form__control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register("channel", {
                        required: {
                            value: true,
                            message: 'Channel Required'
                        }
                    })} />
                    <p className="error__msg">{errors.channel?.message}</p>
                </div>
                
                <div className="form__control">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" id="twitter" {...register("social.twitter")} />
                </div>

                 <div className="form__control">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" id="facebook" {...register("social.facebook")} />
                </div>

                <div className="form__control">
                    <label htmlFor="primary-phone">Primary PhoneNumber</label>
                    <input type="text" id="primary-phone" {...register("phoneNumbers.0")} />
                </div>

                <div className="form__control">
                    <label htmlFor="secondary-phone">Secondary PhoneNumber</label>
                    <input type="text" id="secondary-phone" {...register("phoneNumbers.1")} />
                </div>

                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}
export default YouTubeForm