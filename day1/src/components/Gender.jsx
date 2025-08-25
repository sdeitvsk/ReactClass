function Gender({ gender }) {
  return (
    <div>
    Gender : 
    <span className="gender">
      {gender === 'm' ? '👦' : gender === 'f' ? '👧' : '❓'}
    </span>
    </div>
  );
}

export default Gender;
