// import { DataSource } from "typeorm";
// import * as  dotenv from "dotenv";
// import { User } from "../entities/User";
// import { Property } from "../entities/Property";
// import { AgentCommission } from "../entities/AgentCommission";
// import { Agreement } from "../entities/Agreement";
// import { Enquiry } from "../entities/Enquiry";
// import { ResetToken } from "../entities/ResetToken";
// import { TenantProfile } from "../entities/TenantProfile";
// import { Booking } from "../entities/Booking";
// dotenv.config();



// const dataSource = new DataSource({
//     type:"postgres",
//     host: process.env.DB_HOST, 
//     port:parseInt(process.env.DB_PORT || "5432"),
//     username:process.env.DB_USERNAME,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME,
//     synchronize:true,
//     entities:[User,Property,AgentCommission,Agreement,Enquiry,ResetToken,TenantProfile,Booking]  
    

    
// })

// export default dataSource;



import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { User } from "../entities/User";
import { Property } from "../entities/Property";
import { AgentCommission } from "../entities/AgentCommission";
import { Agreement } from "../entities/Agreement";
import { Enquiry } from "../entities/Enquiry";
import { ResetToken } from "../entities/ResetToken";
import { TenantProfile } from "../entities/TenantProfile";
import { Booking } from "../entities/Booking";

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // ✅ use full connection string in production
  synchronize: true,             // careful in production: may auto-drop columns!
  ssl: process.env.STATUS === "production" ? { rejectUnauthorized: false } : false,
  entities: [
    User,
    Property,
    AgentCommission,
    Agreement,
    Enquiry,
    ResetToken,
    TenantProfile,
    Booking,
  ],
});

export default dataSource;

