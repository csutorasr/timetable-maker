import { ipcMain } from 'electron';
import { Connector } from './connectors/connector';
import { IRequest, RequestType } from './request';
import { IResponse } from './response';

export class PersistConnector<T extends string, V> {
  constructor(private connector: Connector<T, V>) {
    ipcMain.on('persist', async (event, req: IRequest<T, V>) => {
      switch (req.type) {
        case RequestType.save:
          this.sendResponse(event, {
            type: req.type,
            entity: await this.connector.save(req),
            entityType: req.entityType,
          });
          break;
        case RequestType.findAll:
          this.sendResponse(event, {
            type: req.type,
            entities: await this.connector.findAll(req),
            entityType: req.entityType,
          });
          break;
      }
    });
  }

  sendResponse(event, data: IResponse<T, V>) {
    event.sender.send('persist', data);
  }
}
