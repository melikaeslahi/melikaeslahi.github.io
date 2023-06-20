import {loading} from '../assets/image';
const Loading = () => {
    return (
        <section className='w-screen h-screen flex flex-col justify-center items-center'>
            <section className='w-80 h-80 '>
                <img className='w-full h-full justify-center' src={loading} alt="" />
            </section>
        </section>

    )
}
export default Loading;