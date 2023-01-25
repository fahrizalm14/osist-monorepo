import axios, { AxiosInstance } from "axios";
import { ISekolahResponse } from "../interface/ISekolah";
import { IPenggunaResponse } from "../interface/IPengguna";
import { IGTKResponse } from "../interface/IGTK";
import { IPesertaDidikResponse } from "../interface/IPesertaDidik";
import { IRombonganBelajarResponse } from "../interface/IRombonganBelajar";
import { AuthorizationError } from "@osist/error";

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
        throw new AuthorizationError("Akses ke dapodik web service ditolak.");
      }

      return data as ISekolahResponse;
    } catch (error) {
      throw new AuthorizationError("Akses ke dapodik web service ditolak.");
    }
  }

  async getPengguna(): Promise<IPenggunaResponse | null> {
    try {
      const { data } = await this._api.get(`getPengguna?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        throw new AuthorizationError("Akses ke dapodik web service ditolak.");
      }

      return data as IPenggunaResponse;
    } catch (error) {
      throw new AuthorizationError("Akses ke dapodik web service ditolak.");
    }
  }

  async getRombel(): Promise<IRombonganBelajarResponse | null> {
    try {
      const { data } = await this._api.get(`getRombel?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        throw new AuthorizationError("Akses ke dapodik web service ditolak.");
      }

      return data as IRombonganBelajarResponse;
    } catch (error) {
      throw new AuthorizationError("Akses ke dapodik web service ditolak.");
    }
  }

  async getGtk(): Promise<IGTKResponse | null> {
    try {
      const { data } = await this._api.get(`getGtk?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        throw new AuthorizationError("Akses ke dapodik web service ditolak.");
      }

      return data as IGTKResponse;
    } catch (error) {
      throw new AuthorizationError("Akses ke dapodik web service ditolak.");
    }
  }

  async getPesertaDidik(): Promise<IPesertaDidikResponse | null> {
    try {
      const { data } = await this._api.get(`getPesertaDidik?npsn=${this.npsn}`);
      if (typeof data !== "object") {
        throw new AuthorizationError("Akses ke dapodik web service ditolak.");
      }

      return data as IPesertaDidikResponse;
    } catch (error) {
      throw new AuthorizationError("Akses ke dapodik web service ditolak.");
    }
  }
}
