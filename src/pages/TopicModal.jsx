import React from 'react';
import Compact from "../Components/Lessons/Props/Compact.jsx";
import PropsCode from "../Components/Lessons/Props/PropsCode.jsx";
import TodoUseState from "../Components/Lessons/ToDo/TodoUseState.jsx";
import StateCode from "../Components/Lessons/ToDo/StateCode.jsx";
import Slider from "../Components/Lessons/Swiper/Swiper.jsx";
import SwiperCode from "../Components/Lessons/Swiper/SwiperCode.jsx";
import Effects from "../Components/Lessons/useEffects/Effects.jsx";
import useEffectsCode from "../Components/Lessons/useEffects/UseEffectsCode.jsx";
import Translate from "../Components/Lessons/translate/Translate.jsx";
import Validation from "../Components/Lessons/validation/Validation.jsx";
import UiComponents from "../Components/Lessons/uiComponents/UiComponents.jsx";
import NestedRoutes from "../Components/Lessons/NestedRoutes/NestedRoutes.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Modal from "../Components/ui/Modal.jsx";
import Code from "../Components/ui/Code.jsx";
import {UiComponentsCode} from "../Components/Lessons/uiComponents/UiComponentsCode.jsx";
import {TranslateCode} from "../Components/Lessons/translate/TranslateCode.jsx";
import {NestedRoutesCode} from "../Components/Lessons/NestedRoutes/NestedRoutesCode.jsx";
import {ValidationCode} from "../Components/Lessons/validation/ValidationCode.jsx";

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