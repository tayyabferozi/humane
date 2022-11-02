import "./components/datatable/datatable.scss"



export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 }, {


        field: "firstname", 
        headerName: "First Name", 
        width: 150,
    },
    {
    field: "lastname", 
        headerName: "Last Name", 
        width: 150,
    },
        {
        field:"user",
        
        headerName:"Username",
      
            width: 230,
        
            renderCell: (params) =>{
                return(
                    <div className="cellWithImg">
                        <img className="CellImg" src={params.row.img} alt="avatar"/>
                        {params.row.userName}
                    </div>
                );                   
         },
},

{
    field: "email", 
    headerName: "Email", 
    width: 230,

},
{
    field: "type", 
    headerName: "Type", 
    width: 150,
},
{
    field: "access", 
    headerName: "Access", 
    width: 150,
},
{
    field: "status", 
    headerName: "Status", 
    width: 165,
    renderCell: (params) => {
        return <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}</div>
    }
}


];
        
//temporary data
export const userRows = [
       
        {
        id: 1,
        firstname: "Frances",
        lastname: "Alexander",
        userName: "alexander123",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "frances@gmail.com",
        status: "active",
        type: "Member",
        access: "Membership",
       },
       {
        id: 2,
        firstname: "Allan",
        lastname: "Peterson",
        userName: "allanpeterson342",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "alain@humanecoaching.com",
        status: "pending",
        type: "Admin",
        access: "Support",
       },
       {
        id: 3,
        firstname: "Roxie",
        lastname: "Thompson",
        userName: "roxiex567",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "roxie@gmail.com",
        status: "active",
        type: "Member",
        access: "Membership",
       },
       {
        id: 4,
        firstname: "Patrick",
        lastname: "Moralez",
        userName: "Patrick1b200",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "patrick@humanecoaching.com",
        status: "inactive",
        type: "Super Admin",
        access: "Organizational",
       },
       {
        id: 5,
        firtName: "John",
        lastName: "Roster",
        userName: "rosterxp24",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "john@humanecoaching.com",
        status: "pending",
        type: "Employee",
        access: "Membership",
       },
       {
        id: 6,
        firstname: "Lisa",
        lastname: "Ray",
        userName: "lraytvstart",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "frances@gmail.com",
        status: "active",
        type: "Contractor",
        access: "Membership",
       },
       {
        id: 7,
        firstname: "Mirah",
        lastname: "Felix",
        userName: "mflx145",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "alain@gmail.com",
        status: "pending",
        type: "Member",
       },
       {
        id: 8,
        firstname: "Matt",
        lastname: "Ryan",
        userName: "matt2ryan",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "roxie@ghumanecoaching.com",
        status: "active",
        type: "Admin",
       },
       {
        id: 9,
        firstname: "Tom",
        lastname: "Brady",
        userName: "bradythegoat",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "patrick@humanecoaching.com",
        status: "inactive",
        type: "Super Admin",
       },
       {
        id: 10,
        firstname: "Jeff",
        lastname: "Benzo",
        userName: "jeffreyb11",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "john@gmail.com",
        status: "pending",
        type: "Contractor",
        access: "Non-Membership",
       },
       {
        id: 11,
        firstname: "Frances",
        lastname: "Lambar",
        userName: "flambarmix32",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "frances@gmail.com",
        status: "active",
        type: "Admin",
       },
       {
        id: 12,
        firstname: "Jennifer",
        lastname: "Brown",
        userName: "jennyb164",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "alain@gmail.com",
        status: "pending",
        type: "Member",
       },
       {
        id: 13,
        firstname: "Bob",
        lastname: "Mixer",
        userName: "bob345td",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "roxie@gmail.com",
        status: "active",
        type: "Member",
       },
       {
        id: 14,
        firstname: "Eric",
        lastname: "Smith",
        userName: "esmith",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "esmith@ghumanecoaching.com",
        status: "inactive",
        type: "Employee",
       },
       {
        id: 15,
        firstname: "Suzan",
        lastname: "Hayley",
        userName: "zusanrlyz12",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "john@gmail.com",
        status: "pending",
        type: "Member",
       },
       {
        id: 16,
        firstname: "John",
        lastname: "Roster",
        userName: "rosterrpx24",
        img: "https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face",
        email: "john@humanecoaching.com",
        status: "pending",
        type: "Employee",
        access: "Non-Membership",
       },
    ]


