import { ReactNode } from "react";

interface DefaultLayoutProps {
    children: ReactNode | ReactNode[] | undefined;
}
 
const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
    return ( 
        <div className="w-screen h-screen flex justify-center bg-blue-300">
          <div className="h-screen max-w-lg w-full box-border p-5 overflow-y-auto bg-white">

            {children}
        
          </div>
        </div>
     );
}
 
export default DefaultLayout;