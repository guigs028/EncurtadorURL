import { Router, Request, Response } from 'express';
import { UrlModel } from '../models/Url';
import crypto from 'crypto';
import { isValidUrl } from '../validators';

const router = Router();

// Rota para encurtar uma URL
router.post('/encurtar', async (req: Request, res: Response) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'URL original é obrigatória.' });
  }

  if (!isValidUrl(originalUrl)) {
    return res.status(400).json({ error: 'URL inválida.' });
  }

  // Gera um código curto aleatório
  const shortCode = crypto.randomBytes(4).toString('hex');

  // Salva no banco
  try {
    const url = new UrlModel({ originalUrl, shortCode });
    await url.save();
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar URL.' });
  }
});

// Rota para redirecionar usando o código curto
router.get('/:code', async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const url = await UrlModel.findOne({ shortCode: code });
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar URL.' });
  }
});

export default router;
