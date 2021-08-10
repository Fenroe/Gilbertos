const elementData = (name = "", tag = "", elements = [], sharedNames = []) => {
    return {
        name,
        tag,
        elements,
        sharedNames
    };
};

export {
    elementData
};