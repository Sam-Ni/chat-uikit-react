interface ProfileParams {
    nick?: string;
    avatar?: string;
    gender?: string;
    selfSignature?: string;
    allowType?: string;
    birthday?: number;
    location?: string;
    language?: string;
    messageSettings?: number;
    adminForbidType?: string;
    level?: number;
    role?: number;
    profileCustomField?: Array<any>;
}

export { ProfileParams };
