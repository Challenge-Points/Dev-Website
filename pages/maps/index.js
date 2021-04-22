import MapTable from "../../components/MapTabel";
import styles from "../../styles/Users.module.css";

const Maps = () => {
    return (
        <div>
            <h1>Maps</h1>
            <tabelkq className={styles.userTable}>
                <thead>
                    <td>
                        <div class="margin-left-20">
                            <b> </b>
                        </div>
                    </td>
                    <td>
                        <div class="margin-left-20">
                            <b> Name </b>
                        </div>
                    </td>
                    <td>
                        <div class="margin-left-20">
                            <b> Mapper </b>
                        </div>
                    </td>
                    <td>
                        <div class="margin-left-20">
                            <b> CP </b>
                        </div>
                    </td>
                    <td>
                        <div class="margin-left-20">
                            <b> Diff </b>
                        </div>
                    </td>
                </thead>
                <tbody>
                    <MapTable
                        hash="0343313f585c228c0fd4daf3ae976a491a184f20"
                        name="Ferrari"
                        mapper="midddd"
                        cp="300"
                        diff="expert+"
                        id="fcde"
                        index="1"
                    />
                    <MapTable
                        hash="08f86ed5f5d88ccf17d7abe2de3cfac4478f7ec7"
                        name="Release the Kraken"
                        mapper="LOBSTERRR"
                        cp="260"
                        diff="expert+"
                        id="121b0"
                        index="0"
                    />
                    <MapTable
                        hash="10e4af46f527ea1adead7165a896a850ed635fb3"
                        name="Terminal Missa"
                        mapper="Astrella"
                        cp="380"
                        diff="expert+"
                        id="7cfe"
                        index="0"
                    />
                    <MapTable
                        hash="11adc80af189e45f123783838fa09a30e7b400cf"
                        name="Evacuate the Mosphit"
                        mapper="fraies & Oddloop"
                        cp="200"
                        diff="expert+"
                        id="4fc1"
                        index="1"
                    />
                    <MapTable
                        hash="123019b1f3878f65e5dffed72cac7b42c3f067ed"
                        name="hand crushed by a mallet"
                        mapper="Water"
                        cp="215"
                        diff="expert"
                        id="10bee"
                        index="0"
                    />
                    <MapTable
                        hash="12c781a279bb0ee658b948e842d768224cffdbfc"
                        name="Cherry Doll"
                        mapper="Mid"
                        cp="45"
                        diff="expert"
                        id="c4f8"
                        index="0"
                    />
                    <MapTable
                        hash="12c781a279bb0ee658b948e842d768224cffdbfc"
                        name="Cherry Doll"
                        mapper="Mid"
                        cp="385"
                        diff="expert+"
                        id="c4f8"
                        index="1"
                    />
                    <MapTable
                        hash="196c6a407903f29535a1827209f0118a345f8886"
                        name="Cheat Codes for Hoes"
                        mapper="FatBeanzoop"
                        cp="75"
                        diff="normal"
                        id="6fb1"
                        index="0"
                    />
                    <MapTable
                        hash="1b7a94fc678ccfe408584ca241f6e926be81f783"
                        name="Pure Ruby"
                        mapper="CriminalCannoli"
                        cp="165"
                        diff="expert+"
                        id="5f34"
                        index="0"
                    />
                    <MapTable
                        hash="21ee4f0b621c1c143e53248ad724840683691b9a"
                        name="system failure"
                        mapper="Saint"
                        cp="380"
                        diff="expert+"
                        id="cec4"
                        index="0"
                    />
                    <MapTable
                        hash="2e1bdde7df8b45f638459d7e676c1facb22a916b"
                        name="Armageddon"
                        mapper="Water"
                        cp="500"
                        diff="expert+"
                        id="d8d0"
                        index="0"
                    />
                    <MapTable
                        hash="377fed587c81a7b697678b838d8b0c02cd1a0b77"
                        name="NS22"
                        mapper="Bananentropfen"
                        cp="540"
                        diff="expert+"
                        id="8ab5"
                        index="0"
                    />
                    <MapTable
                        hash="44559c411fef0041998536d43ecb3cec21d40f76"
                        name="Guardian of the Former Seas"
                        mapper="Salad"
                        cp="180"
                        diff="expert+"
                        id="10fb5"
                        index="1"
                    />
                    <MapTable
                        hash="4835ca18f2a40441858764f125face707b972175"
                        name="Coconut Mall"
                        mapper="Water"
                        cp="360"
                        diff="expert+"
                        id="10945"
                        index="0"
                    />
                </tbody>
            </tabelkq>
        </div>
    );
};

export default Maps;
