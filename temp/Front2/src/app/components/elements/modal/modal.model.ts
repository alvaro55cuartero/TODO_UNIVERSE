export class Modal {
    message: Array<String>;
    type: ModalType;
    callback: Function;

    constructor(init?:Partial<Modal>) {
        Object.assign(this, init);
    }
}

export enum ModalType {
    info,
    question
}
