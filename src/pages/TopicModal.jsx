import React from 'react';
import Compact from "../Components/Lessons/props/Compact.jsx";
import PropsCode from "../Components/Lessons/props/PropsCode.js";
import TodoUseState from "../Components/Lessons/toDo/TodoUseState.jsx";
import StateCode from "../Components/Lessons/toDo/StateCode.js";
import Slider from "../Components/Lessons/swiper/Swiper.jsx";
import SwiperCode from "../Components/Lessons/swiper/SwiperCode.js";
import Effects from "../Components/Lessons/useEffects/Effects.jsx";
import useEffectsCode from "../Components/Lessons/useEffects/UseEffectsCode.js";
import Translate from "../Components/Lessons/translate/Translate.jsx";
import Validation from "../Components/Lessons/validation/Validation.jsx";
import UiComponents from "../Components/Lessons/uiComponents/UiComponents.jsx";
import NestedRoutes from "../Components/Lessons/nestedRoutes/NestedRoutes.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Modal from "../Components/ui/Modal.jsx";
import Code from "../Components/ui/Code.jsx";
import {UiComponentsCode} from "../Components/Lessons/uiComponents/UiComponentsCode.js";
import {TranslateCode} from "../Components/Lessons/translate/TranslateCode.js";
import {NestedRoutesCode} from "../Components/Lessons/nestedRoutes/NestedRoutesCode.js";
import {ValidationCode} from "../Components/Lessons/validation/ValidationCode.js";
import Db from "../Components/Lessons/db-json/Db.jsx";
import {DbCode} from "../Components/Lessons/db-json/DbCode.js";
import {ContextCode} from "../Components/Lessons/context/ContextCode.js";
import Sleep from "../Components/Lessons/context/Sleep.jsx";
import Upload from "../Components/Lessons/files uploading/Upload.jsx";
import {UploadCode} from "../Components/Lessons/files uploading/UploadCode.js";
import Reducer from "../Components/Lessons/reducer/Reducer.jsx";
import {ReducerCode} from "../Components/Lessons/reducer/ReducerCode.js";
import ReduxFront from "../Components/Lessons/redux/reduxFront/ReduxFront.jsx";
import {ReduxFrontCode} from "../Components/Lessons/redux/reduxFront/ReduxFrontCode.js";
import ReduxBack from "../Components/Lessons/redux/reduxBack/ReduxBack.jsx";
import {ReduxBackCode} from "../Components/Lessons/redux/reduxBack/ReduxBackCode.js";
import UseRef from "../Components/Lessons/useRef/UseRef.jsx";
import {UseRefCode} from "../Components/Lessons/useRef/UseRefCode.js";
import {UseMemoCode} from "../Components/Lessons/useMemo+useCallBack/useMemo/UseMemoCode.js";
import UseMemo from "../Components/Lessons/useMemo+useCallBack/useMemo/UseMemo.jsx";
import {UseCallBackCode} from "../Components/Lessons/useMemo+useCallBack/useCallBack/UseCallBackCode.js";
import UseCallBack from "../Components/Lessons/useMemo+useCallBack/useCallBack/UseCallBack.jsx";

const TopicModal = () => {
    const navigate = useNavigate();
    const {topic} = useParams();
    const topics = {
        props: {
            component: <Compact />,
            code: PropsCode,
        },

        useState: {
            component: <TodoUseState />,
            code: StateCode,
        },

        swiper: {
            component:<Slider/>,
            code:SwiperCode,
        },

        useEffect: {
            component: <Effects/>,
            code: useEffectsCode,
        },

        validation: {
            component: <Validation/>,
            code: ValidationCode,
        },

        nestedRoutes: {
            component: <NestedRoutes/>,
            code: NestedRoutesCode,
        },

        translate: {
            component:<Translate/>,
            code: TranslateCode,
        },

        uiComponents: {
            component:<UiComponents/>,
            code: UiComponentsCode,
        },

        dataBase: {
            component:<Db/>,
            code: DbCode,
        },
        context:{
            component:<Sleep/>,
            code: ContextCode,
        },
        fileUploading:{
            component: <Upload/>,
            code: UploadCode,
        },
        reducer:{
            component: <Reducer/>,
            code: ReducerCode,
        },
        reduxFront:{
            component: <ReduxFront/>,
            code: ReduxFrontCode,
        },
        reduxBack:{
            component: <ReduxBack/>,
            code: ReduxBackCode,
        },
        useRef:{
            component: <UseRef/>,
            code: UseRefCode,
        },
        useMemo:{
            component: <UseMemo/>,
            code: UseMemoCode,
        },
        useCallback:{
            component: <UseCallBack/>,
            code: UseCallBackCode,
        }
    }

    const currentTopic = topics[topic]

    if(!currentTopic) return null

    return (
        <Modal setVisible={() => navigate("/")}>
            {currentTopic.component}
            <Code props={currentTopic.code} />
        </Modal>
    );
};

export default TopicModal;