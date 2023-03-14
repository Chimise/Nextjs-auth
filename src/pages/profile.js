import useAuth from '@/hooks/useAuth'

const ProfilePage = () => {
const {data} = useAuth();
  return (
    <div className="py-4 pt-10 pb-4">
      <div className="max-w-[50rem] w-[90%] mx-auto rounded-sm shadow-sm">
        <div className="bg-gray-200 text-slate-800 p-3">
            Profile Information
        </div>
        <div className="flex flex-wrap items-center">
          <div className='w-full md:w-1/3 p-2 md:p-3 text-gray-600'>Email address</div>
          <div className="w-full md:w-2/3 p-2 md:p-3 text-gray-800">{data.user.email}</div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.isAuth = true;

export default ProfilePage;
