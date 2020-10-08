export type Action = {
    type: ACTION;
}

export enum ACTION {
    ADD = 'Add',
    RESET = 'Reset'
}

export const earnCounting = function (state = 1, action: Action) {
    switch (action.type) {
        case ACTION.ADD: 
            return state + 1
        case ACTION.RESET: 
            return 1
        default:
            return state;
    }
};
