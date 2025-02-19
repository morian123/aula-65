import IClass from "../intefaces/IClass";

interface IClassCardProps{
    sala:IClass;
}

function ClassCard({ sala }: IClassCardProps) {
    return(        
        <div>
        <div>
          <p>{sala.estudantes}/{sala.capacidade}</p>
          <strong>{sala.nome}</strong>
        </div>
        <div>
          <p>
            {sala.day} - {sala.hour}
          </p>
        </div>
      </div>
    )
};

export default ClassCard;