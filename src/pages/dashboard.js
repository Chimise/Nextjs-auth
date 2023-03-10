import useAuth from "@/hooks/useAuth";

const DashboardPage = () => {
    const {data} = useAuth()
    return <div className="px-4 py-5">
        Hello {data.user.name}
    </div>
}

DashboardPage.isAuth = true;

export default DashboardPage;