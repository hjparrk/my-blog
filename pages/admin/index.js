import AuthForm from "../../components/admin/auth-form";

function Admin() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-40 mb-40 pb-40">
        <h1 className="font-bold text-5xl mb-5 mr-16">Admin</h1>
        <AuthForm />
      </div>
    </>
  );
}

export default Admin;
