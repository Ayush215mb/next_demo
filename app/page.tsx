import Hello from "@/components/hello"
const Page = () => {

    console.log("Wjat type of component am i?")
    return (
        <main>
            <Hello/>
            <div className={ "text-5xl underline" }>Welcome to next js</div>
        </main>

    )
}
export default Page
