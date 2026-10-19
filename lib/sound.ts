// Web Audio API pure synthesizer for authentic devotional temple sounds
// Completely offline, 100% royalty-free, zero external audio dependencies, safe on all devices.

class DevotionalSoundManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("durga_puja_sound_enabled");
      this.enabled = saved === "true";
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(enable: boolean) {
    this.enabled = enable;
    if (typeof window !== "undefined") {
      localStorage.setItem("durga_puja_sound_enabled", enable ? "true" : "false");
    }
    if (enable) {
      this.initContext();
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Authentic Temple Brass Bell (मंदिर की घंटी)
   * Simulates rich physical bell harmonics with realistic metallic resonance and decay.
   */
  public playTempleBell() {
    if (!this.enabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const baseFreq = 587.33; // D5 pitch, traditional Indian temple brass bell
    const harmonics = [
      { freq: baseFreq, gain: 0.6, decay: 2.8 },
      { freq: baseFreq * 2.01, gain: 0.35, decay: 2.2 },
      { freq: baseFreq * 3.02, gain: 0.2, decay: 1.6 },
      { freq: baseFreq * 4.24, gain: 0.15, decay: 1.1 },
      { freq: baseFreq * 5.4, gain: 0.08, decay: 0.7 },
    ];

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, now);
    masterGain.connect(ctx.destination);

    harmonics.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Attack: instantaneous strike
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.exponentialRampToValueAtTime(gain, now + 0.005);
      // Decay: exponential decay of brass vibration
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + decay);
    });
  }

  /**
   * Diya lighting celestial sparkle chime (दीप प्रज्वलन स्वर)
   */
  public playDiyaChime() {
    if (!this.enabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [659.25, 880.0, 1046.5, 1318.51]; // E5, A5, C6, E6

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.07;
      const duration = 1.2;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.25, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  }

  /**
   * Auspicious Conch / Shankh resonance (शंख नाद)
   */
  public playShankhNaad() {
    if (!this.enabled) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 2.4;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc1.type = "sawtooth";
    osc2.type = "sine";

    // Pitch bends slightly as breath pressure stabilizes
    osc1.frequency.setValueAtTime(260, now);
    osc1.frequency.exponentialRampToValueAtTime(320, now + 0.5);
    osc1.frequency.setValueAtTime(320, now + 1.8);
    osc1.frequency.exponentialRampToValueAtTime(280, now + duration);

    osc2.frequency.setValueAtTime(520, now);
    osc2.frequency.exponentialRampToValueAtTime(640, now + 0.5);
    osc2.frequency.setValueAtTime(640, now + 1.8);
    osc2.frequency.exponentialRampToValueAtTime(560, now + duration);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(1200, now + 0.4);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.4, now + 0.4);
    gain.gain.setValueAtTime(0.35, now + 1.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }
}

export const soundManager = new DevotionalSoundManager();
