import axios, { AxiosInstance } from "axios";
import { ISekolahResponse } from "../interface/ISekolah";

export class DapodikApi {
  private readonly _api: AxiosInstance;
  constructor(private npsn: string, dapodikKey: string, host = "http://localhost:5774") {
    this._api = axios.create({
      baseURL: `${host}/WebService/`,
      headers: {
        Authorization: `Bearer ${dapodikKey}`,
      },
    });
  }

  async getSekolah(): Promise<ISekolahResponse | null> {
    try {
      const { data } = await this._api.get(`getSekolah?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        return null;
      }

      return data as ISekolahResponse;
    } catch (error) {
      return null;
    }
  }

  async getPengguna(): Promise<ISekolahResponse | null> {
    try {
      const { data } = await this._api.get(`getPengguna?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        return null;
      }

      return data as ISekolahResponse;
    } catch (error) {
      return null;
    }
  }

  async getRombel(): Promise<ISekolahResponse | null> {
    try {
      const { data } = await this._api.get(`getRombel?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        return null;
      }

      return data as ISekolahResponse;
    } catch (error) {
      return null;
    }
  }

  async getGtk(): Promise<ISekolahResponse | null> {
    try {
      const { data } = await this._api.get(`getGtk?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        return null;
      }

      return data as ISekolahResponse;
    } catch (error) {
      return null;
    }
  }

  async getPesertaDidik(): Promise<ISekolahResponse | null> {
    try {
      const { data } = await this._api.get(`getPesertaDidik?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        return null;
      }

      return data as ISekolahResponse;
    } catch (error) {
      return null;
    }
  }
}
