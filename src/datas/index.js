
export const colors = {
    PALE_DARK : 'rgba(0,0,0,0.75)',
    PALE_SNOW : 'rgba(255,255,255,0.75)',
    SNOW : 'rgba(255,255,255,1)',
    DARK : 'rgba(0,0,0,0.85)',
    ERROR : 'red',
};

export const sizes = {
    none : 10,
    sm : 18,
    md : 23,
    lg : 25,
    xl : 30,
    xxl : 50
}

export const focusActions = {
    SET_FOCUS : 'set-focus',
    ADD_FOCUS : 'add-focus',
    REMOVE_FOCUS : 'remove-focus',
    SET_HISTORY : 'set-history',
    UPDATE_HISTORY : 'update-history',
}

export const initialFocusState = {
    focus : null,
    focusHistory : []
}

export const focusStatus = {
    STARTED : 1,
    CANCELLED : 2,
    COMPLETED : 3
};

export const focusColors = {
    1 : colors.PALE_SNOW,
    2 : 'red',
    3 : colors.PALE_SNOW,
}

export const keys = {
    focusHistory : 'focusHistory'
}