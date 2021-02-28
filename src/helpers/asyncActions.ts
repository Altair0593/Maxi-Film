import { Dispatch, ActionCreator as AC, Action } from 'redux';
// import { CtxType } from 'store/commonTypes';

// export const dispatchRequest = (ctx: CtxType, action: AC<Action>) => (payload?: any, util?: any) => {
//     return new Promise((resolve, reject) => ctx.store.dispatch(action({
//         payload, resolve, reject, ctx, util,
//     })));
// };

export const dispatchRequestClient = (dispatch: Dispatch, action: AC<Action>) => (payload?: any, util?: any) => {
    return new Promise((resolve, reject) => dispatch(action({
        payload, resolve, reject, util, dispatch,
    })));
};
