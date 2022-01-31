import { spawn } from "@redux-saga/core/effects";
import { getAnswerWatcher } from "./saga";

export default function* rootSaga () {
    yield spawn(getAnswerWatcher);
}