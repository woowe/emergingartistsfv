import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';

const CONFIG = {
    space: 'dssor9lnmpiq',
    accessToken:
        '20d8b166345a8b89c7164988db2aa98d0a64e646c9205247475e46688cbee35c',

    entryIds: {
        homepage: '2aGAO8Y0jKi2ssk0aesaKs',
        overview: '2KMq5FOwmcWCem6Gugi4SI',
        getInvolved: '2Rvdirll0IgiggIU6UsmWc',
        team: '2KfkaNoY124iaY0uUGqMmw'
    }
};

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {
    private cdaClient = createClient({
        space: CONFIG.space,
        accessToken: CONFIG.accessToken
    });

    constructor() {}

    getHomepageData() {
        return this.cdaClient.getEntry(CONFIG.entryIds.homepage);
    }

    getOverviewData() {
        return this.cdaClient.getEntry(CONFIG.entryIds.overview);
    }

    getGetInvolvedData() {
        return this.cdaClient.getEntry(CONFIG.entryIds.getInvolved);
    }

    getTeamData() {
        return this.cdaClient.getEntry(CONFIG.entryIds.team);
    }

    getGhostArt() {
        return this.cdaClient.getEntries({
            content_type: 'ghostArt'
        });
    }
}
