import { spawn } from "@redux-saga/core/effects";
import { getAnswerWatcher } from "../../view/calculate/saga/saga";

export default function* rootSaga () {
    yield spawn(getAnswerWatcher);
}