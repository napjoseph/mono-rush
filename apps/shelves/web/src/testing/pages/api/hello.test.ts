import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../../pages/api/hello.api';

describe('/api/hello', () => {
  it('says hello', async () => {
    const req: Partial<NextApiRequest> = {};
    const res: Partial<NextApiResponse> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };

    handler(req as NextApiRequest, res as NextApiResponse);

    expect(res.status).toHaveBeenCalledWith(200);
    expect((res.json as jest.Mock).mock.calls).toEqual([[{ text: 'hello' }]]);
  });
});
