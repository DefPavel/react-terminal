import AfishaPage from "../tabs/Afisha"
import {
    TabPanel,
    TabsBody,
    Tabs,
    TabsHeader,
    Tab
} from "@material-tailwind/react";
import PdfPage from "../tabs/PdfPage";

const MainPage = () => {
    return (
        <Tabs value="afisha">
            <TabsHeader>
                <Tab value="afisha">
                    Афишы
                </Tab>
                <Tab value="pdf-files">
                    PDF
                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="afisha">
                    <AfishaPage />
                </TabPanel>
                <TabPanel value="pdf-files">
                    <PdfPage />
                </TabPanel>
            </TabsBody>
        </Tabs>


    )
}

export default MainPage