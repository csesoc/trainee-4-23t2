import UserStatCard from "../components/UserStatCard";

export function UserStatPage() {
    return (
        <div className="bg-theme-black flex mt-20 p-20 rounded-xl justify-center gap-10">
            <div className="container w-1/2">
                <h3 className="text-3xl font-bold mb-8">Damn you suck</h3>
                <div className="text-left text-lg">
                    <p>
                        Your best topic was Arrays, where you attempted 60 out of 69 questions.
                    </p>
                    <p>
                        Keep on working on loops! You’ve attempted 10 out of 40 questions.
                    </p>
                    <p>
                        Your fastest test time is x:xx, which is 14% faster than your previous record of x:xx.
                    </p>
                </div>
            </div>
            <div className="">
                <h3 className="text-3xl mb-8 font-bold"> Your Stats</h3>
                <div className="grid grid-cols-2 gap-10 justify-items-center">
                    <UserStatCard name="Challenging Questions" number={0} style="bg-theme-pink"></UserStatCard>
                    <UserStatCard name="Hard Questions" number={12} style="bg-slate-500"></UserStatCard>
                    <UserStatCard name="Medium Questions" number={24} style="bg-purple-400"></UserStatCard>
                    <UserStatCard name="Easy Questions" number={40} style="bg-theme-blue"></UserStatCard>
                </div>
            </div>
        </div>
    )
}